const defaultState = {
    dataSource : [
        {
            id: 1,
            nameCityFrom: 'London',
            nameCityTo: 'London',
            from: [51.519, -0.12],
            to: [51.500, -0.09],
            zoom: 13,
            polyline: [[51.501, -0.09], [51.51, -0.1], [51.51, -0.12],],
            multiPolyline: [[51.510, -0.12],[51.520, -0.12]],
        },
        {
            id: 2,
            nameCityFrom: 'London',
            nameCityTo: 'London',
            zoom: 12,
            from: [51.52, -0.12],
            to: [51.515, -0.09],
            polyline: [[51.514, -0.09], [51.51, -0.1], [51.51, -0.12],],
            multiPolyline: [[51.510, -0.12], [51.520, -0.12],],
        },
    ],
    selectOptionData: [
        {
            name: 'London',
            id: 'london',
            from: [51.52, -0.12],
            to: [51.515, -0.09],
            polyline: [[51.514, -0.09], [51.51, -0.1], [51.51, -0.12],],
            multiPolyline: [[51.510, -0.12], [51.520, -0.12],],
        },
        {
            name: 'Brighton',
            id: 'brighton',
            from: [51.52, -0.12],
            to: [51.515, -0.09],
            polyline: [[51.514, -0.09], [51.51, -0.1], [51.51, -0.12],],
            multiPolyline: [[51.510, -0.12], [51.520, -0.12],],
        },
    ],
}

const TO = "TO"

export const mapReducer = (state = defaultState, action) => {
    switch (action.type){
        case TO:
            return {...state, dataSource: state.dataSource.map(obj => {
                    if (obj.id === action.payload.id) {
                        return {...obj, to: action.payload.routeTo,nameCityTo: action.payload.cityTo.city,polyline: action.payload.polyline, zoom: 7};
                    }
                    return obj;
                })}
        default: return state
    }
}

export const mapToAction = (payload) => ({type: TO, payload})