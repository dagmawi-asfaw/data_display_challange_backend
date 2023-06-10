  
import xlsx from 'xlsx';
function parseFile(path): Array<Object> { 
    try {
        const workbook = xlsx.readFile(path);
        const sheetNames = workbook.SheetNames;
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])

        const tasks = []

        data.map((row: JSON) => {
            if (Object.keys(row).length == 5) {

                var unit: String = '';
                if (row["__EMPTY_2"] === "No") {
                    unit = "m3"
                }
                else { 
                    unit = row["__EMPTY_2"];
                }


                var quantity: Number = 0;
                if (typeof parseInt(row["__EMPTY_3"]) == 'number' && !isNaN(parseInt(row["__EMPTY_3"]))) {
                    quantity = parseInt(row["__EMPTY_3"]);
                }
                else { 
                    quantity = 0;
                }
                
                var rate: Number;
                if (typeof parseInt(row["__EMPTY_4"]) == 'number' && !isNaN(parseInt(row["__EMPTY_4"]))) {
                    rate = parseInt(row["__EMPTY_4"]);
                }
                else { 
                    rate = 0;
                }
                var amount: Number;
                if (typeof parseInt(row["__EMPTY_5"]) == 'number' && !isNaN(parseInt(row["__EMPTY_5"]))) {
                    amount = parseInt(row["__EMPTY_5"]);
                }
                else { 
                    amount = 0;
                }

                const task: Object = {
                    "description": row["__EMPTY_1"],
                    "unit": unit,
                    "quantity":quantity,
                    "rate": rate ,
                    "amount":amount 
                }    
                tasks.push(task);
            }
        });

        return tasks;
    }
    catch (err) {
        console.log(err);
    }
}


export default parseFile;