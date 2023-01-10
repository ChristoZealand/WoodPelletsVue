const baseUrl = "http://localhost:5245/WoodPellet"

Vue.createApp({
    data() {
        return {
            woodPellets: [],
            addNewWoodPellet: {brand: "", price: 0, quality: 0},
            addMessage: "",
            WoodPellet: null,
            woodPelletId: null,
            updateTheWoodPellet: {Id: 0,brand: "", price: 0, quality: 0},
            updateMessage: "",
            woodPelletIdUpdate: null,
            quality: null,
        }
    },
    
    async created() { 
        try {
            const response = await axios.get(baseUrl)
            this.woodPellets = await response.data
        } catch (ex) {
            alert(ex.message)
        }
    },
    methods: {
        async getWoodPelletById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.WoodPellet = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addWoodPellet() {
            console.log(this.addNewWoodPellet)
            try {
                response = await axios.post(baseUrl, this.addNewWoodPellet)
                this.addMessage = "response " + response.status + " " + response.statusText
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updateWoodPellet() {
            console.log(this.updateTheWoodPellet)
            const url = baseUrl + "/" + this.woodPelletIdUpdate
            try {
                response = await axios.put(url, this.updateTheWoodPellet)
                this.updateMessage = "response " + response.status + " " + response.statusText
            } catch (ex) {
                alert(ex.message)
            } 
        },
        async sortQuality(){
            let sortedList = this.woodPellets
            sortedList = sortedList.sort().reverse()
        },
    }
}).mount("#app")