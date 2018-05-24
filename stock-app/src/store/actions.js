import Vue from 'vue';

// get data saved on firebase
export const loadData = ({commit}) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                // commit mutations
                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        });
};