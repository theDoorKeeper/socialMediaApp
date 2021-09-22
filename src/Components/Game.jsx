/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


const Wrapper = styled.div`
	position : relative;
	width : 15rem;
	height : 20rem;
	display : flex;
	justify-content : center;
	gap : 2rem;
	left : 15%;
	z-index : 2;
`;

const GamePicture = styled.img`
	width : 15rem;
	height : 25rem;
	margin-top : 15%;
	border : 3px solid transparent;
	&:hover{
		border : 3px solid ${props => props.theme.colors.primaryGreen};
		cursor : pointer;
	}
`;

const CoverPicture = styled.div`
	width : 100%;
	height : 50%;
	background : url(${props=> props.image}) no-repeat center center fixed;
	background-color : ${props => props.theme.colors.backgroundGray};
	filter : 8px;
	background-size : cover;
`;

const TitleWrapper = styled.div`
display : flex;
flex-direction: column;
align-self : flex-end;
& :first-child{
    font-size : ${props => props.theme.fontSizes.large};
    color : ${props => props.theme.colors.white};
};
& :nth-child(2){
    font-size : ${props => props.theme.fontSizes.medium};
    color : ${props => props.theme.colors.transparentWhite};
};  

& :nth-child(3){
    font-size : ${props => props.theme.fontSizes.small};
    color : ${props => props.theme.colors.transparentWhite};
};

`;

const Content = styled.div`
margin-left : 35rem;
display : flex;
`;

const GameDetailsCard = styled.div`
width : 50%;
min-height : 30rem;
background-color : blue;
`;

const GameRatingCard = styled.div`
width : 25%;
background-color:yellow;

`;

function Game() {
	const { name } = useParams();

	const [exists, setExists] = useState(true);
	const [gameData, setgameData] = useState(null);

	const queryGame = async () =>{
		axios({
			url: `https://rawg-video-games-database.p.rapidapi.com/games/${name}?key=43d9190ae1bb47f9a9a2276650e8b411`,
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
				'x-rapidapi-key': '4d60ceecd9mshd2062f54ef385b3p131f5bjsnee5d0dd46364'			
			},
		})
			.then(response => {
				console.log(response.data);
				setgameData(response.data);
			})
			.catch(err => {
				console.error(err);
				setExists(false);
			});
		
	};

	useEffect(() => {
		
		queryGame(); 

	}, []);


	return (
		<>

			<CoverPicture image ={gameData && gameData.background_image}> 
				<Wrapper>
					<GamePicture src = {gameData && gameData.background_image_additional}/>
					<TitleWrapper>
						<div> {gameData && gameData.name} </div>
						<div> Studio : {gameData && gameData.developers.map((developer,i) => developer.name )} </div>
						<div> {gameData && gameData.genres.map((developer,i) => developer.name )} </div>
					</TitleWrapper>
				</Wrapper>
			</CoverPicture>
			<Content>
				<GameDetailsCard> { gameData && gameData.description_raw} </GameDetailsCard>
				<GameRatingCard/>
			</Content>
		
		</>
	);
}

export default Game;
