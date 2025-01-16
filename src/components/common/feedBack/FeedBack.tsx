import React, { useState } from 'react'
import style from './style.module.scss'
import { Box, Button, Rating } from '@mui/material'
import { IconButton, Input, Textarea } from '@mui/joy'
import { FeedBackProps } from './Feedback.types'


const FeedBack: React.FC<FeedBackProps> = ({ title, name, comment, btnReview, rating, setNewReviews }) => {
  const [nameInput, setNameInput] = React.useState<string>('')
  const [commentArea, setCommentArea] = React.useState<string>('')
  const [grade, setGrade] = React.useState<number | null>(0)
  const [errorInput, setErrorInput] = useState(false)
  const [errorArea, setErrorArea] = useState(false)

  const sendEmoji = (emoji:string) => {
    setCommentArea(commentArea + emoji) 
    setErrorArea(false)
  }
  
  const sendForm = async () => {
    const date = new Date().toLocaleDateString('ua-UA'); 

    if(commentArea && nameInput) {
      const review = {
        date: date,
        author: nameInput,
        descr: commentArea,
        grade: grade || 0
      }
      
      try {
        const response = await fetch('http://demo5408873.mockable.io/reviews1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify(review), 
        });
  
        if (response.ok) {
          console.log(`Відгук відправленно: ${response.status}`);
          setNewReviews((prevReviews) => [...prevReviews, review])
          
          setNameInput('')
          setCommentArea('')
          setGrade(0)
        }
      } catch (error) {
        console.error('Ошибка при отправке данных:', error);
      }
    } else {
      if(!commentArea)  {
        setErrorArea(true)
      }
      if(!nameInput) {
        setErrorInput(true)
      }
    }
  }



  return (
    <div className={style.feedBack}>
      <h2 className={style.feedBack_title}>{title}</h2>
      <Input
        placeholder={name}
        value={nameInput}
        color={errorInput ? "danger": "neutral" }
        variant="outlined"
        onChange={(e) => {
          setNameInput(e.target.value)
          setErrorInput(false)
        }}
        sx={{
          margin:'20px 0 0',  
          '--Input-focusedInset': 'var(--green)',
          '&::before': {
            transition: 'box-shadow 0.3s ease-in-out',
          },
          '&:focus-within': {
            borderColor: 'var(--green)',
            color: 'var(--black-10)'
          },
          width: '60%',
        }}
      />
      <Textarea
        minRows={3} 
        placeholder={comment} 
        error={errorArea}
        value={commentArea}
        onChange={(e)=> {
          setCommentArea(e.target.value)
          setErrorArea(false)
        }}
        sx={{
          margin:'20px 0 0',  
          '--Textarea-focusedInset':'var(--green)',
          '&::before': {
            transition: 'box-shadow 0.3s ease-in-out',
          },
          '&:focus-within': {
            borderColor: 'var(--green)',
            color: 'var(--black-10)'
          },
          width: '60%',
        }}
        startDecorator={
          <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
            <IconButton variant="outlined" color="neutral" onClick={()=>sendEmoji('👍')}>
              👍
            </IconButton>
            <IconButton variant="outlined" color="neutral" onClick={()=>sendEmoji('😍')}>
              😍
            </IconButton>
            <IconButton variant="outlined" color="neutral" onClick={()=>sendEmoji('👎')}>
              👎
            </IconButton>
            <IconButton variant="outlined" color="neutral" onClick={()=>sendEmoji('💩')}>
              💩
            </IconButton>

          </Box>
        }
      />
      <div className={style.feedBack_rating}>
        <p className={style.feedBack_rating__title}>{rating}</p>
        <Rating
          name="hover-feedback"
          value={grade || 0}
          precision={1}
          size="large"
          onChange={(event,newValue) => setGrade(newValue)}
        />
      </div>
      {btnReview && <Button 
        variant="contained" 
        sx={{ padding: '5px 5px', backgroundColor: "#5f8b6f", fontSize: '14px', width:"60%", marginTop:'20px'}}
        onClick={sendForm}
      >
        {btnReview}
      </Button>}
    </div>
  )
}

export default FeedBack
