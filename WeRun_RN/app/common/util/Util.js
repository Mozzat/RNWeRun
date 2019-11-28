import moment from 'moment'

const MomentDateFilter = (dateString:'',times) => {
    return moment(times).format(dateString)
}

export {
    MomentDateFilter
}