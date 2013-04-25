/**
 Copyright 2013 Red Hat, Inc.

 This software is licensed to you under the GNU General Public
 License as published by the Free Software Foundation; either version
 2 of the License (GPLv2) or (at your option) any later version.
 There is NO WARRANTY for this software, express or implied,
 including the implied warranties of MERCHANTABILITY,
 NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 have received a copy of GPLv2 along with this software; if not, see
 http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
*/


angular.module('Katello').controller('SystemsController',
    ['$scope', 'Nutupane', '$location', '$http', '$compile',
    function($scope, Nutupane, $location, $http, $compile) {

        var columns = [{
            id: 'name',
            display: 'Name',
            show: true
        },{
            id: 'environment',
            display: 'Environment',
            show: true
        },{
            id: 'content_view_id',
            display: 'Content View',
            show: true
        }];

        var transform = function(data){
            var rows = [];

            angular.forEach(data.systems,
                function(system){
                    var row = {
                        'row_id' : system.id,
                        'show'  : true,
                        'cells': [{
                            display: $compile('<a ng-click="select_item(\'' + system.uuid + '\')">' + system.name + '</a>')($scope),
                            column_id: 'name'
                        },{
                            display: system.environment.name,
                            column_id: 'environment'
                        },{
                            display: system.content_view_id ? system.content_view_id : "",
                            column_id: 'content_view_id'
                        }]
                    };
                    rows.push(row);
                });

            return {
                rows    : rows,
                total   : data.total,
                subtotal: data.subtotal
            };
        };

        $scope.table                = Nutupane.table;
        $scope.table.url            = '/katello/api/systems/';
        $scope.table.transform      = transform;
        $scope.table.model          = 'Systems';
        $scope.table.data.columns   = columns;

        $scope.select_item = function(id){
            $location.search('item', id);

            $http.get('/katello/api/systems/' + id, {
                params : {
                    expanded : true
                }
            })
            .then(function(response){
                $scope.table.visible = false;
                $scope.system = response.data;
            });
        };

        if( $location.search().item ){
            $scope.select_item($location.search().item);
        }

        Nutupane.get();
    }]
);
