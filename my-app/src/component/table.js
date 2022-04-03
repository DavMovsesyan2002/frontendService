import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Select, Space, Table} from "antd";
import {Option} from "antd/es/mentions";
import {mapToAction} from "../store/mapReducer";
import {useMap} from "../context/map";

const TableComponent = ( ) => {
    const dispatch = useDispatch()
    const mapData = useSelector(state => state.mapData)

    const [dataSourceOfTable,setDataSourceOfTable] = useState(mapData.dataSource)
    const [selectOptionData,setSelectOptionData] = useState(mapData.selectOptionData)
    const [rowOfTableKey, setRowOfTableKey] = useState(1)
    const [city, setCity] = useState([{id:1,city: "London"},{id: 2,city: "London"}]);
    const {setZoom, setRouteFrom, routeTo, setRouteTo, polyline, setPolyline, setMultiPolyline} = useMap()

    const onClickRow = (record) => {
        return {
            onClick: () => {
                setRowOfTableKey(Number(record.id));
                setRouteFrom(record.from);
                setRouteTo(record.to)
                setPolyline(record.polyline);
                setMultiPolyline(record.multiPolyline)
                setZoom(record.zoom)
            },
        };
    }

    const handleChangeTo = (value) => {
        let newArr = city.map((item) => {
            if (rowOfTableKey == item.id) {
                return { ...item, city: value };
            } else {
                return item;
            }
        });
        setCity(newArr);
   }

   const columnsData = [
        {
            title: 'From',
            dataIndex: 'nameCityFrom',
            key: 'nameCityFrom',
        },
        {
            title: 'To',
            dataIndex: 'nameCityTo',
            key: 'nameCityTo',
        },
        {
            title: 'изменить маршрут откуда',
            dataIndex: 'fromRoute',
            key: 'fromRoute',
            render: (text, record) => (
                <Space size="middle">
                    <Select defaultValue="london" className='select'>
                        <Option value="from-london">London</Option>
                    </Select>
                </Space>
            ),
        },
        {
            title: 'изменить маршрут куда',
            dataIndex: 'toRoute',
            key: 'toRoute',
            render: (text, record) => (
                <Space size="middle">
                    <Select defaultValue="london" className='select-container' onChange={handleChangeTo}>
                        {selectOptionData.map((item) =>{
                                return <Option key={item.key} value={item.name}>{item.name}</Option>
                            })
                        }
                    </Select>
                </Space>
            ),
        },
    ];

    const setRowClassName = (record) => {
        return record.id === rowOfTableKey ? 'clickRowStyl' : '';
    }

    useEffect(() => {
        setDataSourceOfTable(mapData.dataSource)
    },[mapData.dataSource])

    useEffect(() => {
            if(city[rowOfTableKey - 1].city === "Brighton") {
                setZoom(7);
                setRouteTo([50.869, -0.09]);
                setPolyline([[50.869, -0.09], [51.51, -0.1], [51.51, -0.12]])
            }else {
                if (Number(rowOfTableKey) === 1) {
                    setRouteTo([51.500, -0.09])
                    setPolyline([[51.501, -0.09], [51.51, -0.1], [51.51, -0.12],])
                } else {
                    setRouteTo([51.515, -0.09])
                    setPolyline([[51.514, -0.09], [51.51, -0.1], [51.51, -0.12],])
                }
            }
    },[city,rowOfTableKey]);

    useEffect(() => {
        dispatch(mapToAction({id: rowOfTableKey,cityTo: city[rowOfTableKey-1], routeTo, polyline}))
    },[polyline])

    return(
        <div className='column resizable'>
            <h1>REACT</h1>
            <Table dataSource={dataSourceOfTable} columns={columnsData} onRow={onClickRow}  className='table-border' rowClassName={setRowClassName}
            />
        </div>
    )
}

export default TableComponent