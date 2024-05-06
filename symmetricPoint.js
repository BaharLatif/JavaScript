function symmetricPoint(p, q) {
    const dx = q[0] - p[0];
    const dy = q[1] - p[1];
    
    
    const px = q[0] + dx;
    const py = q[1] + dy;
    
    
    return [px, py];
}

const p = [1, 2];
const q = [3, 4];
const p1 = symmetricPoint(p, q);
console.log("Symmetric point of P about Q:", p1); 
