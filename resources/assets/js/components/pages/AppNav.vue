<template>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    
</template>

<script>
export default {
    data: () => ({
      items: [
        { icon: 'dashboard', text: 'Dashboards' },
        { icon: 'person', text: 'Invoice' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Management',
          model: true,
          children: [
            { icon: 'local_pharmacy', text: 'Hospital' },
            { icon: 'person', text: 'Manage User' },
            { icon: 'person_add', text: 'User Role' },
            { icon: 'remove_red_eye', text: 'User Log' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Hospital',
          model: true,
          children: [
            { icon: 'arrow_right', text: 'Information' },
            { icon: 'arrow_right', text: 'Building' },
            { icon: 'arrow_right', text: 'Service' },
            { icon: 'arrow_right', text: 'Room' },
            { icon: 'arrow_right', text: 'Bed' },
            { icon: 'arrow_right', text: 'Room Material' },
            { icon: 'arrow_right', text: 'Position' },
            { icon: 'arrow_right', text: 'Consulting Fee' },
            { icon: 'arrow_right', text: 'Payment Type' },
            { icon: 'arrow_right', text: 'Package' },
            { icon: 'arrow_right', text: 'Desease Category' },
            { icon: 'arrow_right', text: 'Desease' },
            { icon: 'arrow_right', text: 'Application Form' },
            { icon: 'arrow_right', text: 'Exchange' },
            { icon: 'arrow_right', text: 'Taxes' },
            { icon: 'arrow_right', text: 'Enterprise' },
            { icon: 'arrow_right', text: 'Identity Type' },
            { icon: 'arrow_right', text: 'Value List' },
            { icon: 'arrow_right', text: 'Operation Role' },
            { icon: 'arrow_right', text: 'Setting' },
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Pharmacy',
          model: true,
          children: [
            { icon: 'arrow_right', text: 'Category' },
            { icon: 'arrow_right', text: 'Medicine' },
            { icon: 'arrow_right', text: 'Unit' },
            { icon: 'arrow_right', text: 'Dose Unit' },
            { icon: 'arrow_right', text: 'Usage' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Accounting',
          model: true,
          children: [
            { icon: 'arrow_right', text: 'Chart of Accounts' },
            { icon: 'arrow_right', text: 'Transaction' },
            { icon: 'arrow_right', text: 'Cash Deposit' },
            { icon: 'arrow_right', text: 'Closs Balance' },
            { icon: 'arrow_right', text: 'Report' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Inventory',
          model: true,
          children: [
            { icon: 'arrow_right', text: 'Supplier' },
            { icon: 'arrow_right', text: 'Customer' },
            { icon: 'arrow_right', text: 'Category Material' },
            { icon: 'arrow_right', text: 'Material' },
            { icon: 'arrow_right', text: 'Stock' },
            { icon: 'arrow_right', text: 'Stock Transaction' },
            { icon: 'arrow_right', text: 'Stock Transfer' },
            { icon: 'arrow_right', text: 'Quotation Request' },
            { icon: 'arrow_right', text: 'Purchase Invoice' },
            { icon: 'arrow_right', text: 'Stock Increase' },
            { icon: 'arrow_right', text: 'Stock Lost and Broke' },
            { icon: 'arrow_right', text: 'Sale' },
            { icon: 'arrow_right', text: 'Purchase Payment' },
            { icon: 'arrow_right', text: 'Take Medicine' },
            { icon: 'arrow_right', text: 'Take Material' }
          ]
        },
        { icon: 'access_time', text: 'Availability' },
        { icon: 'list_alt', text: 'Appointment' },
        { icon: 'contact_mail', text: 'Patient' },
        { icon: 'work', text: 'Human Resource' },
        { icon: 'view_column', text: 'Para-Clinic' },
        { icon: 'import_contacts', text: 'Log Book' },
        { icon: 'mail', text: 'Report' },
        { icon: 'bar_chart', text: 'Result' },
        { icon: 'settings', text: 'Settings' }
      ]
    }),

    props: {
      source: String
    } 

}
</script>
