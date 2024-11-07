type Circle = {
    shape: "circle";
    radius: number;
}
type Rectangle = {
    shape: "rectangle";
    width: number
    height: number
}

type CircleOrRectangle = Circle | Rectangle;

function calculateShapeArea(info: CircleOrRectangle): number {
    if (info.shape === "circle") {
        return parseFloat(((Math.PI * info.radius ** 2).toFixed(2)))
    }
    else {
        return parseFloat((info.width * info.height).toFixed(2))
    }
}

// console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
// console.log(calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
// }));