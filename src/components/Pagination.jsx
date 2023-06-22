export default function Pagination({cardsPerPage , totalCards ,paginate})
{
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalCards / cardsPerPage); i++)
    {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex flex-row justify-center gap-x-4 mt-6">
                {pageNumbers.map(number => (
                    <li key={number}><button className="border border-solid border-2 border-blue-300 rounded-full px-4 py-2 hover: cursor-pointer focus:bg-blue-400 focus:text-white" onClick={() => paginate(number)}>{number}</button></li>
                ))}
            </ul>
        </nav>
    )
};