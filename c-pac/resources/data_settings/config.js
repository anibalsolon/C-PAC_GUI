export default {
  id: 'default',
  name: 'Default',
  versions: {
    'default': {
      version: '1.6.0',
      configuration: {
        format: 'bids',
        options: {
          base: '',
          aws_credential_path: null,
          patterns: {
            anatomical_path_template: '',
            functional_path_template: '',
            scan_parameters_path: '',
            brain_mask_path: '',
            fieldmap_phase_path_template: '',
            fieldmap_magnitude_path_template: '',
            anatomical_scan: '',
          },
          subjects: {
            inclusion: [],
            exclusion: [],
          },
          sites: [],
        },
      },
    }
  },
  views: [],
}
