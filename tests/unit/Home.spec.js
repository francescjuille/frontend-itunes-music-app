import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('test Home view Component', () => {
beforeEach(() => {
  });
  
  it('should filter albums results when user fill some text in Filter Results input', async () => {
    const wrapper = await shallowMount(Home, {
      data() {
        return {
          artistName: "Jack Johnson",
          artistsAlbums: [
            {"collectionName":"Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George","artistName":"Jack Johnson","collectionPrice":9.99,"collectionImage":"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg","collectionId":1469577723},
            {"collectionName":"A Tribute To Jack Johnson","artistName":"Miles Davis","collectionPrice":9.99,"collectionImage":"https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/5d/59/2a/5d592a24-b846-66f0-5b3b-c18888633adc/source/100x100bb.jpg","collectionId":394930066}
          ],
          artistsAlbumsToDisplay:[
            {"collectionName":"Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George","artistName":"Jack Johnson","collectionPrice":9.99,"collectionImage":"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ae/4c/d4/ae4cd42a-80a9-d950-16f5-36f01a9e1881/source/100x100bb.jpg","collectionId":1469577723},
            {"collectionName":"A Tribute To Jack Johnson","artistName":"Miles Davis","collectionPrice":9.99,"collectionImage":"https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/5d/59/2a/5d592a24-b846-66f0-5b3b-c18888633adc/source/100x100bb.jpg","collectionId":394930066}
          ],
          filterResults:""
        }
      }
    });
    await wrapper.setData({filterResults:"Johnson and Friends"})
    expect(wrapper.vm.artistsAlbumsToDisplay.length).toEqual(1)
  })
})
