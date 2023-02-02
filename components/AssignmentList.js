import Assignment from "./Assignment.js"
export default {

    components: { Assignment },

    template: `

    <section v-show="assignments.length">

    <h2 class = "font-bold mb-2">{{ title }}
    <span>({{assignments.length}})</span>
    </h2>
    <div class = "flex gap-2">
        <button 
            v-for = "tag in tags" 
            @click = "currentTag = tag"
            class = "border rounded px-1 py-px text-xs"
            :class = "{
                'border-blue-500 text-blue-500':tag === currentTag
            }"
            >{{ tag }}</button>
    </div>
    <ul class="border border-gray-400 divide-y divide-gray-400 mt-4">

       <assignment

            v-for="assignment in filteredAssignments" 
            :key="assignment.id"
            :assignment="assignment"
            ></assignment>

    </ul>

</section>
    `,
    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'All'
        };
    },
    computed: {

        filteredAssignments(){
            if(this.currentTag === 'All'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['All', ...new Set(this.assignments.map(a => a.tag))]
        }
    }
}