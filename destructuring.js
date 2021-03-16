function fetchData() {
    return {
        data: {
            name: 'capt',
            age: 100
        },
        config: {},
        statusText: 'status',
        headers: {}
    }
}

const result = fetchData();

console.log(result)

const { data, config, statusText: stat } = fetchData()

console.log(data, config, stat)