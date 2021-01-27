
import Mock from 'mockjs'

const dictObj = {
  'fieldType': [
    { value: 'VARCHAR2', name: 'VARCHAR2' },
    { value: 'NUMBER', name: 'NUMBER' },
    { value: 'DATE', name: 'DATE' },
    { value: 'CLOB', name: 'CLOB' },
    { value: 'BLOB', name: 'NUMBER' },
    { value: 'NVARCHAR', name: 'NVARCHAR' },
    { value: 'TIMESTAMP', name: 'TIMESTAMP' },
    { value: 'RAW', name: 'RAW' },
    { value: 'LONG RAW', name: 'LONG RAW' },
    { value: 'BINARY_DOUBLE', name: 'BINARY_DOUBLE' },
    { value: 'BINARY_FLOAT', name: 'BINARY_FLOAT' },
    { value: 'INTERVAL DAY TO SECOND', name: 'INTERVAL DAY TO SECOND' },
    { value: 'INTERVAL YEAR TO MONTH', name: 'INTERVAL YEAR TO MONTH' },
    { value: 'TIMESTAMP WITH LOCAL TIME ZONE', name: 'TIMESTAMP WITH LOCAL TIME ZONE' },
    { value: 'CHAR', name: 'CHAR' },
    { value: 'LONG', name: 'LONG' },
    { value: 'NCLOB', name: 'NCLOB' }
  ],
  'isPk': [
    { value: '1', name: '否' },
    { value: '2', name: '是' }
  ],
  'timeFormat': [
    { value: '11', name: 'Date通用' },
    { value: '12', name: 'Time通用' },
    { value: '13', name: '年月专用' },
    { value: '14', name: '年专用' },
    { value: '1', name: 'yyyy/MM/dd' },
    { value: '2', name: 'yyyy-MM-dd' },
    { value: '3', name: 'yyyyMMdd' },
    { value: '4', name: 'yyyy年MM月dd日' },
    { value: '5', name: 'yyyy' },
    { value: '6', name: 'yyyy/MM' },
    { value: '7', name: 'yyyy/MM/dd HH' },
    { value: '8', name: 'yyyy/MM/dd HH:mm' },
    { value: '9', name: 'yyyy/MM/dd HH:mm:ss' },
    { value: '10', name: 'yyyy-MM-dd HH:mm:ss' },
    { value: '15', name: '毫秒通用' }
  ]
}
