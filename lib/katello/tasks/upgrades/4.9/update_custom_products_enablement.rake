namespace :katello do
  namespace :upgrades do
    namespace '4.9' do
      desc "Update custom products enablement"
      task :update_custom_products_enablement => ['environment'] do
        migrator = Katello::Util::DefaultEnablementMigrator.new
        migrator.execute!
      end
    end
  end
end
