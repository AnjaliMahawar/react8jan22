import React from 'react'

 function Home() {
     //state
     var name ='Anjali'
     //function 
     //return

    return (
    <>
    <header>header</header>
    <main>
        <h1>main</h1>
        <h2> hello{name} ..... </h2>
          <ul class="list-group">
            <li class="list-group-item">An item</li>
             <li class="list-group-item">A second item</li>
             <li class="list-group-item">A third item</li>
              <li class="list-group-item">A fourth item</li>
             <li class="list-group-item">And a fifth one</li>
</ul>
    </main>
    <footer>footer</footer>
    </>
    )
}
export default Home