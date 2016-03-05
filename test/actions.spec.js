import { expect } from 'chai'
import * as actions from '../redux/actions'

describe('actions', () => {
  it('should create an action to add a articlesList', () => {
    const pageNum = 1
    const expectedAction = {
      type: 'LOAD_MORE',
      data: {
			articlesList: null,
			pageNum: 1
		}
    }

    expect(actions.default.loadMore(null, pageNum)).to.deep.equal(expectedAction)
  })
})