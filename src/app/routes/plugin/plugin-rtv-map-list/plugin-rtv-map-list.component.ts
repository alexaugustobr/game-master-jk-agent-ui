import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'app/core/error-handler.service';
import { FileService } from 'app/core/file.service';
import { ModalComponent } from 'app/shared/modal/modal.component';
import { ModalConfig } from 'app/shared/modal/modal.config';
import { ToastService } from 'app/shared/toast/toast.service';
import { PluginService } from '../pluging.service';

@Component({
  selector: 'app-plugin-rtv-map-list',
  templateUrl: './plugin-rtv-map-list.component.html',
  styleUrls: ['./plugin-rtv-map-list.component.css']
})
export class PluginRtvMapListComponent implements OnInit {
  availableMaps: any[] = [
    {name: 'lotr_helmsdeep' 
},
{
    name: 'mb2_alderaan' 
},
{
    name: 'mb2_citadel' 
},
{
    name: 'mb2_cmp_arena' 
},
{
    name: 'mb2_cmp_deltaprime' 
},
{
    name: 'mb2_cmp_duel_vengeance' 
},
{
    name: 'mb2_cmp_hotfo' 
},
{
    name: 'mb2_cmp_jedha' 
},
{
    name: 'mb2_commtower' 
},
{
    name: 'mb2_corellia' 
},
{
    name: 'mb2_deathstar' 
},
{
    name: 'mb2_dotf' 
},
{
    name: 'mb2_dotf_classicb' 
},
{
    name: 'mb2_duel_boc' 
},
{
    name: 'mb2_duel_dotf' 
},
{
    name: 'mb2_duel_dunesea' 
},
{
    name: 'mb2_duel_emperor' 
},
{
    name: 'mb2_duel_taris' 
},
{
    name: 'mb2_duel_training' 
},
{
    name: 'mb2_duel_votj' 
},
{
    name: 'mb2_duel_yavin4' 
},
{
    name: 'mb2_echobase' 
},
{
    name: 'mb2_jeditemple' 
},
{
    name: 'mb2_mygeeto' 
},
{
    name: 'mb2_smuggler' 
},
{
    name: 'mb2_starkiller_base' 
},
{
    name: 'mb2_theed' 
},
{
    name: 'mb2_yavinassault_veh' 
},
{
    name: 'pb2_sdestroyer' 
},
{
    name: 'shogun' 
},
{
    name: 'um_bespin' 
},
{
    name: 'um_bespin_classic' 
},
{
    name: 'um_bespin_tournament' 
},
{
    name: 'um_dojo_v2' 
},
{
    name: 'um_hammertime' 
},
{
    name: 'um_sarlaccbarge' 
},
{
    name: 'um_swooprace' 
},
{
    name: 'um_vjun' 
},
{
    name: 'ww2_omaha' 
},

  ];
  selectedMaps: any[] = [];

  @Input() listNumber = 1;

  @ViewChild('modal') private modalComponent!: ModalComponent;
  @ViewChild('file') private fileInput: ElementRef;


  modalConfig : ModalConfig = {
    modalTitle: "Update Map List " + this.listNumber,
    dismissButtonLabel: "Cancel",
    confirmButtonLabel: "Upload",
    shouldConfirm: () => true,
    shouldDismiss: () => true,
    onConfirm: async () => {
      return await this.onUpload()
    },
    onDismiss:() => true,
    disableConfirmButton: () => !this.file || this.isUploading,
    disableDismissButton: () => false,
    hideConfirmButton: () => false,
    hideDismissButton: () => false,
  }

  file: File;
  progress = 0;
  isUploading = false;

  constructor(
    private pluginService: PluginService, 
    private toastService: ToastService,
    private errorHandlerService: ErrorHandlerService
    ) { }
    

  ngOnInit(): void {
    
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  async onUpload() {
    this.isUploading = true;
    await this.pluginService.upload(this.file)
    .toPromise()
    .then(resp => this.toastService.showSuccess('Upload completed.'))
    .catch((err)=>{
      this.errorHandlerService.handle(err);
    })
    this.file = null;
    this.fileInput.nativeElement.value = "";
    this.isUploading = false;
    return true
  }

  async openModal() {
    return await this.modalComponent.open()
  }

}
