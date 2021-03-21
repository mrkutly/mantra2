/* eslint-disable react/jsx-filename-extension */
import './src/global.css'
import React from 'react'
import BackgroundVideo from './src/components/BackgroundVideo'

export const wrapPageElement = ({ element }) => (
	<>
		<BackgroundVideo />
		{element}
	</>
)
