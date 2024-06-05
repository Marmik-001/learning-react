function customRender ( reactElement , container)
{

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute( 'href' , reactElement.props.href) 
    domElement.setAttribute( 'target' , reactElement.props.target) 
    container.appendChild(domElement)

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHtml = reactElement.children

    // for (const props in reactElement.props) {
       
    //     if(props === 'children')
    //         {
    //             continue
    //         }
    //     domElement.setAttribute(props , reactElement.props[props])
    // }
    // container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'click me to direct to google'
}
const mainContainer = document.getElementById('root')

customRender = {reactElement , mainContainer}