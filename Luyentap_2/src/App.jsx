import { useState } from 'react'
import Example1 from './components/Props/Example1'
import Props2 from './components/Props/Props2'
import Props3 from './components/Props/Props3'
import Event1 from './components/Events/Event1'
import Event2 from './components/Events/Event2'
import Event3 from './components/Events/Event3'
import Conditional1 from './components/Conditionals/Conditional1'
import Conditional2 from './components/Conditionals/Conditional2'
import List1 from './components/Lists/List1'
import List2 from './components/Lists/List2'
import Form1 from './components/Forms/Form1'
import Form2 from './components/Forms/Form2'
import Form3 from './components/Forms/Form3'
import Form4 from './components/Forms/Form4'
import Hook from './components/Hook/WhatHook/Hook'
import UseEffect1 from './components/Hook/UseEffect/UseEffect1'
import UseEffect2 from './components/Hook/UseEffect/UseEffect2'
import UseEffect3 from './components/Hook/UseEffect/UseEffect3'
import Component1 from './components/Hook/UseContext/UseContext1'
import { UseContext2, UserProvider } from './components/Hook/UseContext/UserContext2'
import { ColorProvider, UseContext3 } from './components/Hook/UseContext/UseContext3'
import UseRef1 from './components/Hook/UseRef/UseRef1'
import UseRef2 from './components/Hook/UseRef/UseRef2'
import UseRef3 from './components/Hook/UseRef/UseRef3'
import UseReducer1 from './components/Hook/UseReducer/UseReduce1'
import UseReducer2 from './components/Hook/UseReducer/UseReduce2'
import UseCallBack1 from './components/Hook/UseCallBack/UseCallBack1'
import UseMemo1 from './components/Hook/UseMemo/UseMemo1'
import Custom1 from './components/Hook/CustomHook/Custom1'
import Templete from './components/Hook/Exercises/Templete'
import PostEx from './components/Hook/Exercises/PostExercises/PostEx'
import ProstEX1 from './components/Hook/Exercises/PostExercises/ProstEX1'
import CommentEX from './components/Hook/Exercises/PostExercises/CommentEX'
import UseContext4, { FullnameProvider } from './components/Hook/UseContext/UseContext4'
import UseConText5, { ThemeProvider } from './components/Hook/UseContext/UseContext5'
import UseContext6, { ChangeColorContextProvider } from './components/Hook/UseContext/UseContext6'
import UseReducer3 from './components/Hook/UseReducer/UseReducer3'


function App() {
  return (
    <>
      {/* <Example1 address="Hà Nội" /> */}
      {/* <Props2 /> */}
      {/* <Props3 /> */}

      {/* <Event1 /> */}
      {/* <Event2 /> */}
      {/* <Event3 /> */}

      {/* <Conditional1 text="Goal" />
      <Conditional1 text="Media" /> */}
      {/* <Conditional2 car= {["Vinfat", "Toyota", "Honda"]}/> */}

      {/* <List1/>
      <List2/> */}

      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Form3/> */}
      {/* <Form4/> */}

      {/* <Hook /> */}
      
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect3/> */}

      {/* <Component1/> */}
      {/* <UserProvider>
       <UseContext2/>
      </UserProvider> */}

      {/* <ColorProvider>
       <UseContext3/>
      </ColorProvider> */}

      {/* <UseRef1/> */}
      {/* <UseRef2/> */}
      {/* <UseRef3/> */}

      {/* <UseReducer1 /> */}
      {/* <UseReducer2 /> */}
      <UseReducer3 />

      {/* <UseCallBack1 /> */}

      {/* <UseMemo1/> */}

      {/* <Custom1 /> */}

      {/* <Templete /> */}
      {/* <PostEx/> */}
      {/* <ProstEX1/> */}

      {/* <CommentEX/> */}
      
      {/* <FullnameProvider>
        <UseContext4 />
      </FullnameProvider> */}

      {/* <ThemeProvider>
        <UseConText5/>
      </ThemeProvider> */}

      {/* <ChangeColorContextProvider>
        <UseContext6/>
      </ChangeColorContextProvider> */}

    </>
  )
}

export default App
