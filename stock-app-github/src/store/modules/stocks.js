import stocks from '../../data/stocks';

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            // fixes bug when stock reaches 1
            if (stock.price < 100) {
                stock.price = Math.round(stock.price * (1 + Math.random()));
            } else {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
            }
            //stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};