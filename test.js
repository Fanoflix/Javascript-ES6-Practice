// var keyword is scoped to the function (annoying)
// let keyword is scoped to the block (ez)
function hey()
{
    for (let i = 0 ; i < 5 ; i++)
    {
        console.log(i);
    }
}



hey();