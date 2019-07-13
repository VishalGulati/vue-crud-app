import { shallowMount } from '@vue/test-utils';
import AppFooter from '@/components/AppFooter/AppFooter.vue';

describe('AppFooter.vue', () => {
  it('renders correctly when mounted', () => {
    const msg = 'Designed and Coded by Vishal Gulati';
    const wrapper = shallowMount(AppFooter);
    expect(wrapper.text()).toMatch(msg);
  });
});
