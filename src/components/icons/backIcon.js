import React from 'react'
import { Svg, G, Rect } from 'react-native-svg'

import dimensions from '../../../assets/values/dimensions'
import colors from '../../../assets/values/colors'

const { backIconWidth, backIconTraceWidth, backIconTraceHeight } = dimensions,
	  { white } = colors

const BackIcon = () => (
	<Svg
		width={ backIconWidth / 2 }
		height={ backIconWidth }
	>
		<G 
			origin={ `${ (backIconTraceHeight / 2) }, ${ backIconTraceHeight }` }
			rotation="45"
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

export default BackIcon