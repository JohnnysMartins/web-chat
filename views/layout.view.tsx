import React, { SFC } from 'react'


export const Html: SFC = ({ children }) => (
	<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />

			<link rel="stylesheet" href="/assets/index.css" type="text/css" />
			<title> Chat WEB </title>
		</head>
		<body>
			{children}
		</body>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" />
		<script src="/assets/index.js" />
	</html>
)