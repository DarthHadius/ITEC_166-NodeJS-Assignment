import {  Controller, Get, Param  } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    @Get('prime/:n')
    evaluatePrime(@Param('n') n: number): string {
        // Validate that input is a positive integer
        if (Number.isNaN(n) || n < 1) {
            return 'Please provide a positive integer';
        }

        const checkIfPrime = (number: number): boolean => {
            for (let factor = 2; factor < number; factor++) {
                if (number % factor === 0) {
                    return false;
                }
            }
            return number > 1;
        };

        return JSON.stringify({
            isPrime: checkIfPrime(n),
        });
    }
}
