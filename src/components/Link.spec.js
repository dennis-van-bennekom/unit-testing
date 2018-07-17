import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Link from './Link'

Enzyme.configure({adapter: new Adapter()})

function setup() {
    const props = {
        active: true,
        children: <span>Test</span>,
        onClick: jest.fn()
    };

    const enzymeWrapper = mount(<Link {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Link', () => {
        it('should render self', () => {
            const {enzymeWrapper} = setup()

            expect(enzymeWrapper.find('button').hasClass('Link')).toBe(true)
        })
    })
})