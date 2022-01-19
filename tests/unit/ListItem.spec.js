import { shallowMount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('test List ItemComponent', () => {
  it('should render props.artistsAlbumsToDisplay when passed', () => {
    const artistsAlbumsToDisplay = [{
      "collectionName":"Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George",
      "artistName":"Jack Johnson",
      "collectionPrice":9.99,
      "collectionImage":"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg",
      "collectionId":1469577723
    }]
    const wrapper = shallowMount(ListItem, {
      props: { artistsAlbumsToDisplay:artistsAlbumsToDisplay }
    })
    expect(wrapper.text()).toMatch("Jack Johnson");
    expect(wrapper.text()).toMatch("Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George");
    expect(wrapper.text()).toMatch("9.99");
  })
})
