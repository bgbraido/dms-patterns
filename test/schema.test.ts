import { AWSDMSDataType, DMSS3Schema } from '../src/dms-patterns/core/sources';

test('Produce Schema', () => {

    const providedJsonString = JSON.stringify({
        "TableCount": "1",
        "Tables": [
            {
                "TableName": "employee",
                "TablePath": "hr/employee/",
                "TableOwner": "hr",
                "TableColumns": [
                    {
                        "ColumnName": "Id",
                        "ColumnType": "INT8",
                        "ColumnNullable": "false",
                        "ColumnIsPk": "true"
                    },
                    {
                        "ColumnName": "LastName",
                        "ColumnType": "STRING",
                        "ColumnLength": "20"
                    },
                    {
                        "ColumnName": "FirstName",
                        "ColumnType": "STRING",
                        "ColumnLength": "30"
                    },
                    {
                        "ColumnName": "HireDate",
                        "ColumnType": "DATETIME"
                    },
                    {
                        "ColumnName": "OfficeLocation",
                        "ColumnType": "STRING",
                        "ColumnLength": "20"
                    }
                ],
                "TableColumnsTotal": "5"
            }
        ]
    }, null, 4);

    const schema = new DMSS3Schema(
        [{
            TableName: 'employee',
            TablePath: 'hr/employee/',
            TableOwner: 'hr',
            TableColumns: [{
                ColumnName: 'Id',
                ColumnType: AWSDMSDataType['INT8'],
                ColumnIsPk: true,
                ColumnNullable: false,
            },
            {
                ColumnName: 'LastName',
                ColumnType: AWSDMSDataType['STRING'],
                ColumnLength: 20
            },
            {
                ColumnName: 'FirstName',
                ColumnType: AWSDMSDataType['STRING'],
                ColumnLength: 30
            },
            {
                ColumnName: 'HireDate',
                ColumnType: AWSDMSDataType['DATETIME']
            },
            {
                ColumnName: 'OfficeLocation',
                ColumnType: AWSDMSDataType['STRING'],
                ColumnLength: 20
            }
            ],
        }]
    );

    const json = schema.toJSON();

    expect(json).toEqual(providedJsonString);


});