import React from 'react'

const Clock = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(getDate());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    function getDate(){
        let current = new Date();
        let day = current.getDate();
        let month = current.getMonth();
        let year = current.getFullYear()+127;
        let time = current.toLocaleTimeString();
        return `${time} ${day}/${month}/${year}`
    }
  return (
    <div>
      {time}
    </div>
  )
}

export default Clock
