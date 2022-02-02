// Button Styles

import styled from 'styled-components';

export const StyledButton = styled.button`
	@keyframes appear {
		0% { transform: scale(50%); }
		100% { transform: scale(100%); }
	}
	
	cursor: default;
	
	width: 200px;
	height: 200px;
	
	margin: 5px;
	
	border-radius: 10px;
	border: none;
	box-shadow: 1px 1px 4px #0006;
	
	background-color: ${({theme}) => theme.bg};
	color: ${({theme}) => theme.main};
	
	transition: all .3s cubic-bezier(.23,1,.32,1);
	
	animation: appear .3s cubic-bezier(.23,1,.32,1);
	
	&:disabled {
		background-color: ${({theme}) => theme.disabled};
		box-shadow: none;
	}
	&:enabled {
		&:hover, &:focus {
			background-color: ${({theme}) => theme.hover};
			cursor: pointer;
		}
		&:active {
			background-color: ${({theme}) => theme.active};
			box-shadow: 1px 1px 4px #0006 inset;
		}
	}
`;
