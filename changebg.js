const colors =[  'bg-red-400', 'bg-orange-400','bg-lime-500', 'bg-violet-500' ]

let clrIndex = 0;
document.getElementById('backgroundClr').addEventListener('click',function()
{
    document.body.classList.remove(...colors);
    document.body.classList.add(colors[clrIndex]);
    clrIndex = (clrIndex + 1) % colors.length;
}
)