export default function bs_list(haystack: number[], needle: number): boolean {
    
    let low = 0;
    let high = haystack.length;
    
    do {
        
        const mean = Math.floor(low + (high - low) / 2);
        const value = haystack[mean]

        if (value === needle) {
            return true;
        } else if (value > needle){
            high = mean;
        } else {
            low = mean + 1;
        }

    } while (low < high){
        return false
    }
}