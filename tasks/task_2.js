function isPalindrome(s) {
    
}

// ------------------------------------------------------------------------------------

describe('Task 2', () => {
    it('should return true', function () {
        expect(isPalindrome('12221')).toBe(true);
    });

    it('should return false', function () {
        expect(isPalindrome('Interhyp')).toBe(false);
    });

    it('should return true', function () {
        expect(isPalindrome('Regallager')).toBe(true);
    });
});

