import productMixin from "@/productMixin";
import productMixin2 from "@/productMixinV2";
import { shallowMount } from "@vue/test-utils";

/**
 * mixin 비즈니스 로직만 테스트하여, 새로운 mixin 검증하기
 */

// 사용할 상품 데이터 -> 실제 api를 통해 받아오는 json data 모양과 같음
// 서버와의 규격이 변경되지 않는 한, 바뀔 일 없음..
const MockProducts = [
  {
    name: "햇반",
    originPrice: 1000,
    salePercent: 30,
  },
  {
    name: "스팸",
    originPrice: 2000,
    salePercent: 20,
  },
];

// 2. loop문을 돌면서 각가 데이터에 대한 test를 검증하는 로직입니다.
describe.each(MockProducts)(
  "productMixin & productMixinV2 호환 테스트",
  (product) => {
    // 비교해야할 mixin에 중복되는 이름의 함수, Props 등이 많을때, 컴포넌트 두 개로 테스트
    const wrapper1 = shallowMount(
      {
        render() {},
        mixins: [productMixin],
      },
      {}
    );
    wrapper1.setData({ product });

    const wrapper2 = shallowMount(
      {
        render() {},
        mixins: [productMixin2],
      },
      {}
    );
    wrapper2.setData({ product });

    describe(`상품명: ${product.name}\n`, () => {
      it("🧪 상품 가격(getPrice) 로직 ", () => {
        expect(wrapper2.vm.getPrice()).toEqual(wrapper1.vm.getPrice());
      });

      it("🧪 상품 이름(getName) 로직", () => {
        expect(wrapper2.vm.getName()).toEqual(wrapper1.vm.getName());
      });
    });
  }
);
