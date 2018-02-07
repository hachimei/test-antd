export default function callMoment(moment: any, ...args: any[]){
    return (moment.default || moment)(...args);
}