import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { Token } from '../../services/auth';
import { AxiosUser } from '../../services/axios';
import { All } from '../../Style/all';
import { App } from '../Components/Navbar/Navbar';
import { Alinhar, CapaH, Centraliza, Content, Margem, Separar } from '../Home/Style';
import { AllBook, CapaB } from './style';

export function AllLiv(){
    
    const [post, setPost] = useState()

    const ApagaMeme = () =>{
        localStorage.removeItem(Token)
        window.location.reload(false)

    }

    useEffect(() => {
        AxiosUser.axiosGetPost().then((response)=>{
            setPost(response.data)
        })
     
    },[])
    console.log(post)
    return(

            <All >
                <App />
                <Alinhar>
                    <Centraliza>
                        <Separar>
                            <Margem>
                                    <h1>Todos os livros publicados</h1>
                            </Margem>
                            
                            
                                
                                {typeof post !== 'undefined' && post.map((value)=>{
                                    return(
                                        <AllBook key={value.postID}>
                                            <a href={`/Livro/${value.postID}`}>
                                                <CapaB src={value.pathImg}/>
                                                <div>
                                                    <h1>{value.titulo}</h1>
                                                    <h1>Autor: {value.userName}</h1>
                                                    <h1>Data de publicação: {value.insertDate}</h1>
                                                    <h1>Gênero: {value.genNome}</h1>
                                                </div>
                                            </a>
                                        </AllBook>
                                        )}
                                )}

                          

                        </Separar>
                        
                    </Centraliza>
                    
                </Alinhar>  
   
                 
             
           </All >
    )
}