import {detectDomain} from './detect_domain.js';

it('to produce the correct array', () => {
    const array = [
        'http://web.archive.org/web/20080620033027/http://www.mrvc.indianrail.gov.in/overview.htm',
        'http://www.askoxford.com/concise_oed/train?view=uk',
        'http://www.bnsf.com/media/news/articles/2008/01/2008-01-09a.html',
        'http://www.hydrogencarsnow.com/blog2/index.php/hydrogen-vehicles/i-hear-the-hydrogen-train-a-comin-its-rolling-round-the-bend/',
        'http://www.mrvc.indianrail.gov.in/overview.htm'
    ]
    const path = "C:\\Users\\TGTGa\\WebstormProjects\\TGTGamer\\portfolio\\encircle\\detect_domain\\task_1.html"
    expect(detectDomain(path)).toEqual(array);
});
