export const convert = (value) => {
   
        if(value>=1000000)
        {
            value=(value/1000000)+"M"
        }
        else if(value>=1000)
        {
            value=Math.trunc((value/1000))+"K";
        }
        return value;
    
}