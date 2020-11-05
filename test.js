// var keyword is scoped to the function (annoying)
// let keyword is scoped to the block (ez)
// const keyword is also scoped to the block
// > const variables are constant, cannot be reassigned.
function hey()
{
    for (let i = 0 ; i < 5 ; i++)
    {
        console.log(i);
    }
}



hey();