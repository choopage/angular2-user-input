const barrels: string[] = [
  'app',
  'app/shared',
  'app/click-me',
  'app/keyup-component',
  'app/key-up',
  'app/loop-back',
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};
