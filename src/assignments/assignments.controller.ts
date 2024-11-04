import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    // Calculate the factorial of a given number
    @Get('factorial/:n')
    calculateFactorial(@Param('n') n: number): any {
        if (Number.isNaN(n) || n < 0) {
            throw new Error(`Please provide a non-negative integer (received: ${n})`);
        }

        const computeFactorial = (num: number): number => {
            if (num === 0) {
                return 1;
            }
            return num * computeFactorial(num - 1);
        };

        return { "factorial": computeFactorial(n) };
    }
}
