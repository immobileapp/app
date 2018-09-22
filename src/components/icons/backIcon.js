import React from 'react'
import { Svg, G, Rect } from 'react-native-svg'
import dimensions from '../../../assets/values/dimensions'
import colors from '../../../asets/values/colors'

const { backIconWidth, backIconTraceWidth, backIconTraceHeight } = dimensions,
	  { white } = colors

export default class BackIcon extends React.Component {
	render() {
		return (
			<Svg
				width={ backIconWidth / 2 }
				height={ backIconWidth }
			>
				<G 
					rotate="45"
					origin={ (backIconTraceHeight / 2)+', '+backIconTraceHeight }
				>
					<Rect
						x="0"
						y="0"
						width={ backIconTraceHeight }
						height={ backIconTraceHeight }
	            		strokeWidth={ backIconTraceWidth }
						stroke={ white }
						fill="transparent"
					/>
				</G>
			</Svg>
		)
	}
}