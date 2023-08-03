import React from 'react';

type List = {
  id:string,
  source:string
}

const TechStack:React.FC = () => {
  
  const stackList:Array<List> = [
    {
      id:'1',
      source:'/icons/html5.png'
    },
    {
      id:'2',
      source:'/icons/css3.png'
    },
    {
      id:'3',
      source:'/icons/js.png'
    },
    {
      id:'4',
      source:'/icons/react.png'
    },
    {
      id:'5',
      source:'/icons/redux.png'
    },
    {
      id:'6',
      source:'/icons/tailwind.png'
    },
    {
      id:'7',
      source:'/icons/bootstrap.png'
    },
    {
      id:'8',
      source:'/icons/sass.png'
    }
  ]

  const toolList:Array<List> = [
    {
      id:'1',
      source:'/icons/vscode.png'
    },
    {
      id:'2',
      source:'/icons/git.png'
    },
    {
      id:'3',
      source:'/icons/github.png'
    },
    {
      id:'4',
      source:'/icons/figma.png'
    },
    {
      id:'5',
      source:'/icons/npm.png'
    },
    {
      id:'6',
      source:'/icons/postman.png'
    }
  ]

  const _renderList = (item:List) => {
    return (
      <div className='col-md-2 col-3 mb-5 d-flex align-items-center' key={item.id}>
        <img src={item.source} alt="html5" className='img-fluid' />
      </div>
    )
  }

  return (
    <section className='tss'>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-12 mb-5'>
            <h1 className='text-title mb-3'>My Tech Stack</h1>
            <p className='text-primary'>Technologies I've been working with recently</p>
          </div>
          
          {stackList.map(item => {
            return _renderList(item);
          })}
        </div>

        <div className='row'>
          <div className='col-md-12 mb-5'>
            <h1 className='text-title mb-3'>Tools</h1>
          </div>
          
          {toolList.map(item => {
            return _renderList(item);
          })}
        </div>

        
      </div>
    </section>
  )
}

export default TechStack;