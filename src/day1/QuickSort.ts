function qs(arr: number[], lo: number, hi: number): void {

}

function partition(arr: number[], lo: number, hi: number): number{
    const pviot = arr[hi];

    let idx = lo - 1;
    
    for (let i = lo; i < hi; ++i){
        if (arr[i] <= pviot){
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
}
export default function quick_sort(arr: number[]): void {

}