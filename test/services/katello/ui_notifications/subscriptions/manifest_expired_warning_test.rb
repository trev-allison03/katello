require 'katello_test_helper'

module Katello
  module UINotifications
    module Subscriptions
      class ManifestExpiredWarningTest < ::ActiveSupport::TestCase
        CERT_FIXTURE = "#{Katello::Engine.root}/test/fixtures/certs/uber.pem".freeze

        def setup
          @product = katello_products(:redhat)
          @content = Katello::Content.create!(:name => 'rhel7_content',
                                              :label => Katello::UINotifications::Subscriptions::ManifestExpiredWarning::CONTENT_LABEL,
                                              :organization_id => @product.organization.id)
          @product.contents << @content
          @product.organization.redhat_provider.update_attributes(:repository_url => "https://cdn.redhat.com")
          @class = Katello::UINotifications::Subscriptions::ManifestExpiredWarning

          cert = File.read(CERT_FIXTURE)

          Product.any_instance.stubs(:key).returns(cert)
          Product.any_instance.stubs(:certificate).returns(cert)
          FactoryBot.create(
              :notification_blueprint,
              :expires_in => 24.hours,
              :name => 'manifest_expired_warning'
          )
          assert_empty NotificationBlueprint.find_by(name: 'manifest_expired_warning').notifications
        end

        def clear_notifications
          @product.organization.clear_manifest_expired_notifications
        end

        def test_with_failure
          Net::HTTP.any_instance.stubs(:request).raises(RestClient::Forbidden)
          @class.deliver!([@product.organization])
          assert_equal 1, NotificationBlueprint.find_by(name: 'manifest_expired_warning').notifications.count
        end

        def test_with_disconnected_enabled
          Setting[:content_disconnected] = true
          Net::HTTP.expects(:request).never
          @class.deliver!([@product.organization])
          assert_empty NotificationBlueprint.find_by(name: 'manifest_expired_warning').notifications
        ensure
          Setting[:content_disconnected] = false
        end

        def test_without_product
          @content.product_contents.destroy_all
          Net::HTTP.expects(:request).never
          @class.deliver!([@product.organization])
          assert_empty NotificationBlueprint.find_by(name: 'manifest_expired_warning').notifications
        end

        def test_without_subscription
          @product.pools.destroy_all
          Net::HTTP.expects(:request).never
          @class.deliver!([@product.organization])
          assert_empty NotificationBlueprint.find_by(name: 'manifest_expired_warning').notifications
        end

        def test_with_cdn_mirror
          @product.organization.redhat_provider.update_attributes(:repository_url => "https://cdn.stage.redhat.com")
          Net::HTTP.expects(:request).never
          @class.deliver!([@product.organization])
          assert_empty NotificationBlueprint.find_by(name: 'manifest_expired_warning').notifications
        end
      end
    end
  end
end
