export default {
  data() {
    return {
      product: undefined,
    };
  },
  methods: {
    getPrice() {
      const { originPrice = 0, salePercent = 100 } = this.product ?? {};
      return (originPrice * salePercent) / 100;
    },
    getName() {
      return this.product?.name;
    },
  },
};
