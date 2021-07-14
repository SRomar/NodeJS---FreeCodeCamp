const EventEmitter =  require('events');


const customEmitter = new EventEmitter();

//on - listen for an event
//emit - emit an event

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name} ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`data recieved 2`)
})

customEmitter.emit('response', 'john', 23)
