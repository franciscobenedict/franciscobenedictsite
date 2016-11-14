describe('Filters', function(){ //describe your object type
    beforeEach(module('App')); //load module
    describe('reverse',function(){ //describe your app name
        var reverse;
        beforeEach(inject(function($filter){ //initialize your filter
            reverse = $filter('reverse',{});
        }));
        it('Should reverse a string', function(){  //write tests
            expect(reverse('Nancy')).toBe('ycnaN'); //pass
            expect(reverse('don')).toBe('nod'); //pass
            // expect(reverse('jam')).toBe('oops'); // this test should fail
        });
    });
});