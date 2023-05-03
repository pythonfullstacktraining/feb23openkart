import { Directive, HostBinding, HostListener, Input } from "@angular/core";



@Directive({
    selector: '[appManage]'
})
export class ManageDirective{
    @Input() appManage = '';

    @HostBinding('class.open') isOpen: boolean = false;


    @HostListener('click')
    manageButton(){
        this.isOpen = !this.isOpen;
    }

}